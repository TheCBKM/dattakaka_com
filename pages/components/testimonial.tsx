
import React from 'react';
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBTestimonial,
  MDBAvatar,
  MDBIcon
} from 'mdbreact';

function TestimonialsPage () {
  return (
    <MDBContainer>
      <section className='text-center my-5'>
        <h2 className='h1-responsive font-weight-bold my-5'>Testimonials</h2>

        <MDBCarousel
          activeItem={1}
          length={3}
          testimonial
          interval={false}
          showIndicators={false}
          className='no-flex'
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId='1'>
              <MDBTestimonial>
                <MDBAvatar className='mx-auto mb-4'>
                  <img
                    src='https://mdbootstrap.com/img/Photos/Avatars/img%20(30).webp'
                    className='rounded-circle img-fluid'
                    alt=''
                  />
                </MDBAvatar>
                <p>
                  <MDBIcon icon='quote-left' /> Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Quod eos id officiis hic tenetur
                  quae quaerat ad velit ab. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Dolore cum accusamus eveniet
                  molestias voluptatum inventore laboriosam labore sit,
                  aspernatur praesentium iste impedit quidem dolor veniam.
                </p>
                <h4 className='font-weight-bold'>Anna Deynah</h4>
                <h6 className='font-weight-bold my-3'>Founder at ET Company</h6>
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon far icon='star-half' className='blue-text' />
              </MDBTestimonial>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <MDBTestimonial>
                <MDBAvatar className='mx-auto mb-4'>
                  <img
                    src='https://mdbootstrap.com/img/Photos/Avatars/img%20(31).webp'
                    className='rounded-circle img-fluid'
                    alt=''
                  />
                </MDBAvatar>
                <p>
                  <MDBIcon icon='quote-left' /> Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore.
                </p>
                <h4 className='font-weight-bold'>Maria Kate</h4>
                <h6 className='font-weight-bold my-3'>
                  Photographer at Studio LA
                </h6>
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon icon='star' className='blue-text' />
              </MDBTestimonial>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              <MDBTestimonial>
                <MDBAvatar className='mx-auto mb-4'>
                  <img
                    src='https://mdbootstrap.com/img/Photos/Avatars/img%20(3).webp'
                    className='rounded-circle img-fluid'
                    alt=''
                  />
                </MDBAvatar>
                <p>
                  <MDBIcon icon='quote-left' /> Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum. Sed ut perspiciatis unde omnis iste natus error
                  sit voluptatem accusantium doloremque laudantium.
                </p>
                <h4 className='font-weight-bold'>John Doe</h4>
                <h6 className='font-weight-bold my-3'>
                  Front-end Developer in NY
                </h6>
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon icon='star' className='blue-text' />
                <MDBIcon far icon='star' className='blue-text' />
              </MDBTestimonial>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </section>
    </MDBContainer>
  );
};

export default TestimonialsPage;