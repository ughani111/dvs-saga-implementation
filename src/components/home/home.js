import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { POST_REQUESTED } from '../../constants';

export function Home () {
  const dispatch = useDispatch();
  const [ posts, setPosts ] = useState([]);
  
  console.log(posts)
  useEffect(()=>{    
    setPosts(useSelector(state => state.posts ))
  }, [])
  
  return(
    <div>
      <h1>click to get posts</h1>
      <span onClick={() => dispatch( { type: POST_REQUESTED })}>click me</span>
    </div>
  )
}
