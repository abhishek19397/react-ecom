import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
             <div className="container">
                 <Heading title={heading} />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                        Praesent quam sapien, efficitur ut semper vel, suscipit eu magna. Nunc at tristique tellus. Cras commodo quis magna eget hendrerit. Ut sed nisl id sem efficitur mollis in non urna. Nam gravida venenatis lacus vitae sagittis. Donec accumsan finibus ex, gravida dignissim metus tincidunt ac. Nulla facilisi. Quisque fringilla dui in nisl aliquet, mollis molestie augue congue. In interdum, arcu.
                        </p>
                        <Link to='/about/'>
                            <button className="btn  btn-warning btn-lg">
                                {heading}
                            </button>
                        </Link> 
                     </div>    
                </div>   
              </div >             
        </section>
    )
}
