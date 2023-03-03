import propTypes from 'prop-types'
import React from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { ListCard } from '../../components/ListCardCarrosel'
import { CardItensCarrosel } from './CardItensCarrosel'
import { CardItensStudentCarrosel } from './CardItensStudentCarrosel'
import { CardItensWorkCarrosel } from './CardItensWorkCarrosel'
import { Container } from './Style'

export const IsCarousel = ({ statusProject }) => {
  const listCardStudentProject = ListCard.filter(
    list => list.StudyProject === true
  )

  const listCardWorkProject = ListCard.filter(
    list => list.WorkProjects === true
  )

  return (
    <>
      <Container>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 150
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            820: {
              slidesPerView: 3,
              spaceBetween: 150
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 10
            }
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {(statusProject.allProjects &&
            ListCard.map(list => {
              return (
                <SwiperSlide key={list.id}>
                  <CardItensCarrosel list={list} />
                </SwiperSlide>
              )
            })) ||
            (statusProject.isStudent &&
              listCardStudentProject.map(list => {
                return (
                  <SwiperSlide key={list.id}>
                    <CardItensStudentCarrosel list={list} />
                  </SwiperSlide>
                )
              })) ||
            (statusProject.isWorkExperience &&
              listCardWorkProject.map(list => {
                return (
                  <SwiperSlide key={list.id}>
                    <CardItensWorkCarrosel list={list} />
                  </SwiperSlide>
                )
              }))}
        </Swiper>
      </Container>
    </>
  )
}

IsCarousel.propTypes = {
  statusProject: propTypes.object
}
