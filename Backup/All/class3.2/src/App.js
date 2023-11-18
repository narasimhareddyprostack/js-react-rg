import Header from './components/Header'
import Landing from './components/Landing'
import Service from './components/Service'
import Footer from './components/Footer'
let App = ()=>{


    return <div>
       
         <nav className='navbar navbar-dark bg-dark'>
            <a href="#" className='navbar-brand'>Bootstrap Example</a>
         </nav>
         <hr />
          <h1>App Componnet</h1>
        <hr />
        <Header/>
        <Landing/>
        <Service/>
        <Footer/>

    </div>
}

export default App