import devia from './assets/devia.png';

function App() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Bem vindo</span>

            <span className="login-form-title">
              <img src={devia} alt='logohs'/>
            </span>

            <div className='wrap-input'>
              <input type='email' />
              <span className='focus-input'>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
