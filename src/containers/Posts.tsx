import React from 'react'
import { withRouteData } from 'react-static'
import { Post } from '../types'
import PostThumb from '../components/PostThumb'

interface Props {
  posts: Post[]
}

export default withRouteData(
  ({ posts }: Props) =>
    <div>
      <h1>It's blog time.</h1>
      <br />
      All Posts:
      <ul>
        {posts.map((post) =>
          <li key={post.slug}>
            <PostThumb post={post} />
          </li>
        )}
      </ul>
    </div>
)
