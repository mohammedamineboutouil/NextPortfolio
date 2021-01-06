import { GalleryLayoutStyle } from '../../style/componentStyles/GalleryLayoutStyle'
import { useContext, useEffect, useState } from 'react'
import Context from '../../context/Context'
import Loading from '../atoms/Loading'
import Masonry from 'react-masonry-css'

const Gallery = ({ data }) => {
  const { overlay, setOverlay } = useContext(Context)
  const [loading, setLoading] = useState(1)
  const [count, setCount] = useState(0)
  const [allImagesCount, setAllImagesCount] = useState(0)

  const increaseCount = () => {
    setCount((prev) => prev + 1)
    console.log('setting:' + count)
  }

  const showOverlay = (data) => {
    window.scrollTo(0, 0)
    setOverlay({ status: true, data: data })
  }

  useEffect(() => {
    setLoading(1)
    setAllImagesCount(data.length)
  }, [])

  useEffect(() => {
    setAllImagesCount(data.length)
  }, [data])

  useEffect(() => {
    setAllImagesCount(data.length)
    if (count == allImagesCount) {
      setLoading(0)
    }
  }, [count, allImagesCount, data, loading])

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
    500: 1,
  }

  return (
    <GalleryLayoutStyle loading={loading}>
      {loading == 1 ? <Loading /> : null}
      <div className="grid">
        <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          {data.map((item) => (
            <div className="gallery-box" key={item.id} onClick={() => showOverlay(item.url)}>
              <img src={item.url} onLoad={increaseCount} />
              <div className="overlay">
                <div className="title">
                  <h4>{item.title}</h4>
                </div>
                <div className="zoom">
                  <img src="/icons/loupe.svg" alt="" />
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </GalleryLayoutStyle>
  )
}

export default Gallery
