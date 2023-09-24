//import getPosts from '~/src/modules/firebase/api/getPosts'
import type { NextPage } from 'next'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

//type Props = InferGetServerSidePropsType<typeof getServerSideProps>

interface BlogPageProps {
  posts: any[]
}

const BlogPage: NextPage<BlogPageProps> = ({ posts }) => {
  /* REFS */

  /* STATES */

  /* HOOKS */

  /* METHODS */

  /* HANDLERS */

  return (
    <div>
      BLOg
      {/* {
        posts.length > 0 && posts.map((el) => (
          <div key={el.id}>
            <div className="">{el.title}</div>
            <div className="">{el.content}</div>
            <div className="">{el.category.id}</div>
          </div>
        ))
      } */}
    </div>
  )
}

//type TServerProps = GetServerSideProps<{ posts: any[] }>

// export const getServerSideProps: TServerProps = async () => {
//   //const posts = await getPosts()
//   return { props: { posts: [] } }
// }

export default BlogPage
