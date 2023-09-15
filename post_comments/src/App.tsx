import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import './App.css'

interface Comment {
  id?: string,
  title: string,
  message: string,
  active: boolean
}

const apiKey = '$2b$10$J2.gFxynrMwBbZ8Tc8OrMOAajBZtnu18jms/cJkxTZxPv6L.ghfYa'

const getComments = async () => {
  const response = await fetch('https://api.jsonbin.io/v3/b/64ff7e918d92e126ae6a9503', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Access-Key': apiKey
    }
  })

  if (!response.ok) {
    throw new Error('Failed to fetch comments.')
  }

  const json = await response.json()

  return json?.record as Comment[]
}

async function postComment(comment: Comment) {
  const comments = await getComments()
  const id = crypto.randomUUID()
  const newComment = {...comment, id}
  const commentsToSave = [...comments, newComment]


  const response = await fetch('https://api.jsonbin.io/v3/b/64ff7e918d92e126ae6a9503', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Access-Key': apiKey
    },
    body: JSON.stringify(commentsToSave)
  })

  if(!response.ok) {
    throw new Error('Failed to post comment')
  }

  return newComment
}

const App = () => {
  const {data} = useQuery({
    queryKey: ['commentsQuery'],
    queryFn: getComments
  })

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: postComment,
    // positive refresh: show the latest changes without consent from the onSuccess function.
    onMutate: async (newComment:Comment) => {
      await queryClient.cancelQueries(['commentsQuery'])

      const prevComments = queryClient.getQueryData(['commentsQuery'])

      await queryClient.setQueryData(['commentsQuery'], (oldData?: Comment[]) => {
        const prevComment = structuredClone(newComment)
        prevComment.active = true

        if(oldData == null) return [prevComment]
        return [...oldData, prevComment]
      })

      return { prevComments } // --> this pass trhough 'context'
    },
    onError: (error, variables, context) => {
      console.log(error)
      if(context?.prevComments != null){
        queryClient.setQueryData(['commentsQuery'], context?.prevComments)
      }
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['commentsQuery']
      })
    }
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    const title = data.get('title')?.toString() ?? ''
    const message = data.get('message')?.toString() ?? ''
    const active = false

    mutate({title, message, active})
  }

  return (
    <>
      <h1>Comments</h1>
      {data?.length === 0 && <p>There aren't comments yet</p>}
        <ul>
          {
            data?.map((comment) => {
              console.log(comment.active)
              return(
              <li
                className={comment.active? "comment_container active" : 'comment_container'}
                key={comment.id}
              >
                <div className="title">{comment.title}</div>
                <div className="message">{comment.message}</div>
              </li>
            )})
          }
        </ul>
      <h3>Write a new comment</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
          <input type="text" name="title" id="message" />
        <label htmlFor="message">Message</label>
          <input type="text" name="message" id="message" />
        <button type='submit'>submit</button>
      </form>
    </>
  )
}

export default App