import React from 'react'

export default function Card(props) {

  return (
    <div className="parent">
      <div className="card">
        <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
        <h1>{props.name}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit fugit eaque blanditiis ex provident quaerat obcaecati totam officiis praesentium. Accusamus quo consequuntur vero quaerat recusandae autem eius ea velit totam, ab similique neque excepturi! Explicabo id ab repellat ducimus at a dolore? Laudantium, omnis fugiat.</p>
        <button>view profile</button>
        </div>
    </div>

  )
}
