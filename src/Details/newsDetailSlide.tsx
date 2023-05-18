import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { VscChevronLeft } from 'react-icons/vsc'

export function HomeDetail(){
  const News:{}[] = useSelector((prev: any)=> prev.main.value)
  const NewsId:any = useParams()
  const item:any = News[NewsId.id]
  return(
    <>
      <section className="w-11/12 mx-auto py-12">
      <Link to='/' className="md:text-xl font-thin flex gap-2"><span className="my-auto"><VscChevronLeft/></span><span className="">Back</span></Link>
      <div className="py-6">
        <h1 className="text-3xl md:text-6xl font-thin py-8">{item.title}</h1>
        <img src={item.urlToImage} alt="" />
        <div className='md:text-xl text-[12px] text-blue-600 font-thin flex  gap-4 md:mb-2 mt-2'>
                        <h2 >{item.source.name}</h2>
                        <p>{item.publishedAt.split('T').shift()}</p>
                      </div>
        <p className="md:text-xl pt-4 font-[300] ">{item.description}</p>
        
      </div>
        <a href={item.url} target="_blank" className="bg-blue-500 p-4 font-bold text-white">Read More</a>
      </section>
    </>
  )
}
