const page = () => {
  return (
    <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex flex-col gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/1.jpg" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/2.jpg" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/3.jpg" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/4.jpg" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/5.jpg" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/6.jpg" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/7.jpg" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/8.jpg" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/10.jpg" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/11.jpg" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/9.png" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/12.jpg" />
        </div>
      </div>


    </div>
  )
}

export default page