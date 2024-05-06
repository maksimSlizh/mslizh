import photo from '../../assets/Image/111.png'

export function Prew() {
  return (
    <>
      <section className="prew">
        <div className='container'>
          <div className='prew__content'>
            <div className="prew__box">
              <h1 className='prew__title'>MSlizh</h1>
              <p className='prew__subtitle'>Frontend Developer</p>
            </div>
            <img src={photo} className='prew__img' />
          </div>
        </div>
      </section>
    </>
  )
}
