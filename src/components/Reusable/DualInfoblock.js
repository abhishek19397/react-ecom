import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function DualInfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-8 mx-auto">
                     <p className="lead text-white mb-5">
                     Fusce rhoncus finibus mattis. Fusce lectus lorem, gravida eget lacinia eu, varius ac nibh. Morbi convallis, est a convallis varius, libero sapien faucibus  Integer dolor ante, faucibus ut risus nec, fringilla finibus augue. Nunc id suscipit magna, quis vehicula mi. Praesent scelerisque semper sem. In hac habitasse platea dictumst. Duis posuere, erat eleifend dignissim lobortis, ante metus congue neque, a ultricies odio orci sit amet nisl. Vestibulum a arcu ac diam Nulla et sapien sed purus ullamcorper laoreet non a ipsum. Donec pharetra non dui at tincidunt. Proin vehicula nibh et quam porta bibendum. In aliquam lectus ut tortor suscipit, id faucibus ex fermentum. Sed a lorem sodales, dapibus dui ut, convallis tellus. Vivamus congue tellus id ipsum scelerisque scelerisque. Vestibulum est urna, volutpat ut vulputate nec, cursus eget nulla. Nulla. gravida efficitur a in magna. In ac neque euismod arcu ornare luctus. arcu, ac dignissim urna velit eu magna. Etiam dictum nunc neque, ut ultrices elit molestie non. Suspendisse convallis volutpat lacus. Sed nec vestibulum neque.
                     </p>
                     </div>
                     <div className="col-4">
                     <div className="card bg-dark">
                          <img className="card-img-top" src="https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Card image cap" />
                          <div className="card-body">
                              <h5 className="card-title text-white">Just click photos</h5>
                              <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <a href="#" class="btn btn-warning btn-block">{heading}</a>
                        </div>
                      </div>
                     </div>       
                </div>    
            </div>    
        </section>
    )
}
