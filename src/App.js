import Form from './components/Form'
import pic from './../src/img/LOGO.png'
import human from './../src/img/xepals-pic.png'
import pos from './../src/img/image 6.png'

function App() {
  return (
    <div className="flex w-full h-screen">
      <div>
        <img src={pic} alt="xepals-logo" className='m-5' />
      </div>

      <div className='flex justify-center items-center py-3 px-6'>

        <div className='relative items-center overlap'>
          <img src={pos} alt="xepals-logo" className=' py-8 absolute z-10' />
          <img src={human} alt="A smiling lady on her phone" className='mr-20 bottom-0 left-0 z-0' />
        </div>


        {/* <div className='relative items-center overlap'>
          <img src={pos} alt="xepals-logo" className='py-8 px-5 absolute '/>
          <img src={human} alt="A smiling lady on her phone" className='mr-20 sm:display-none bottom-0 left-0'/>
        </div> */}


        <div className="justify-center flex items-center">
          <Form />
        </div>

      </div>

    </div>
  );
}

export default App;
