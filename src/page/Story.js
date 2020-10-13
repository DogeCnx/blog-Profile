import React, { useState } from 'react' ;
import {useParams} from 'react-router-dom'

import withHelmet from '../utils/withHelmet';

async function getPost(id){
  const response = await fetch.get(`http://127.0.0.1:3333/api/v1/posts/${id}`)
  return response.jason()
}

function usePostData (postId){
  const [post,setPost] = useState({});
  const [isLoading,setIsLoading] = useState(false);
  const [error ,setError] = useState(undefined)

  async function reteiveData() {
    try {
      setIsLoading(true)
      const postResponse = await getPost(postId)
      setPost(postResponse)
    }
    catch(err) {
        setError(err)
    }
    setIsLoading(false)
  }
  return [{post ,isLoading,error},{reteiveData}]
}

function Story () {
  const {storyId} = useParams()
return <div>Story page {storyId}</div>

}

export default withHelmet('Story | Doge')(Story);