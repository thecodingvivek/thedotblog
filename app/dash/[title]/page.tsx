import React from 'react'

const page = ({ params }: { params: { title: string } }) => {
  console.log(params.title);
  return (
    <div>{ params.title }</div>
  )
}

export default page