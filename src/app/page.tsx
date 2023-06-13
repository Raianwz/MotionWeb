import Image from 'next/image'
import pattern from '../assets/pattern.png'
import logoR from '../assets/logo_r.png'
import InputBox from '../components/InputBox'

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center flex-col"
      style={{ backgroundImage: `url("${pattern.src}")`, backgroundColor: '#9400d3' }}>
      <div className="container mx-auto p-4 w-8/12 h-4/5 rounded-lg" style={{ backgroundColor: 'white' }}>
        <div className="flex items-center justify-center mt-3 mb-5">
          <Image src={logoR.src} alt='Logo Motion' width={300} height={300} />
        </div>
        <div className="mx-16 my-16 flex flex-col">
          <div className='space-y-8 flex flex-col'>
            <InputBox type='text' name='txtLogin' id='txtLogin' placeholder='Digite seu E-mail ou Usuário' />
            <InputBox type='password' name='txtPassword' id='txtPassword' placeholder='Digite sua senha' />
          </div>
        </div>
      </div>
      <p className="p-4 sky-50">Motion ©️ 2023</p>
    </div>
  )
}
