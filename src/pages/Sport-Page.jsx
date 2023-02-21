import React from 'react'
import EventLayout from '../layouts/EventLayout'
import EventCarousel from '../components/EventCarousel/Event_Carousel'
import Card from '../components/Card/Card'
import PlayFilter from '../components/Playfilter/PlayFilter'

const SportPage = () => {
  return (
    <>
    <EventCarousel />
    <div>
    <div className="container mx-auto px-4 my-10">
      <div className="w-full flex flex-row-reverse lg:flex-row-reverse gap-4 ssm:flex-col-reverse">
        <div className="lg:w-3/4 p-4 bg-white rounded">
          <h2 className="text-2xl font-bold mb-4">Sports in NCR Delhi</h2>
          <div className="flex flex-wrap ">
          <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center ssm:w-full">
              <Card
                isPlay={true}
                Playsrc="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-9-4-t-6-10-37.jpg"
                title="So Rude of Me by Swati Sachdeva"
                subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center ssm:w-full">
              <Card
                isPlay={true}
                Playsrc="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-suhani-shah-kahaani-india-tour-0-2022-8-29-t-12-36-14.jpg"
                title="So Rude of Me by Swati Sachdeva"
                subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center ssm:w-full">
              <Card
                isPlay={true}
                Playsrc="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-daddy-kool-by-atul-khatri-0-2022-8-16-t-10-37-17.jpg"
                title="So Rude of Me by Swati Sachdeva"
                subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center ssm:w-full">
              <Card
                isPlay={true}
                Playsrc="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sunburn-arena-ft-dj-snake-delhi-ncr-0-2022-8-19-t-11-31-17.jpg"
                title="So Rude of Me by Swati Sachdeva"
                subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center ssm:w-full">
              <Card
                isPlay={true}
                Playsrc="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-9-4-t-6-10-37.jpg"
                title="So Rude of Me by Swati Sachdeva"
                subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center ssm:w-full">
              <Card
                isPlay={true}
                Playsrc="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-9-4-t-6-10-37.jpg"
                title="So Rude of Me by Swati Sachdeva"
                subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 p-4 bg-white rounded">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div>
            <PlayFilter title="Date" tags={["today", "Tomorrow", "This Weekend"]} />
          </div>
          <div>
            <PlayFilter title="Language" tags={["English", "Hindi", "Tamil"]} />
          </div>
          <div>
            <PlayFilter title="Date" tags={["today", "Tomorrow", "This Weekend"]} />
          </div>
        </div>
      </div>
    </div >
    </div>
  </>
  )
}

export default EventLayout(SportPage)