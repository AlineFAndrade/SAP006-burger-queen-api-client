import { Link } from 'react-router-dom';
import logoIMG from '../../images/Logo.png'

import UseForm from './UseForm.js';
import validate from './ValidateRegister.js';

import '../../styles/register.scss';

export function Register() {
    const {handleChange, values, handleSubmit, errors} = UseForm(validate);    

    return (
        <div className="register-page">
            <header className="register-page-header">
                <img className="responsive center" src={logoIMG} alt="Logo Burguer Queen" />
            </header>
            <main className="register-page-main">
                <h2>Cadastro</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                        <input 
                            name="name"
                            id="name"
                            type="text" 
                            autoComplete="off"
                            value ={values.name}
                            onChange={handleChange}
                        />
                        <div className="hidden">{errors.name && <p>{errors.name}</p>}</div> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            name="email"
                            id="email"
                            type="email" 
                            autoComplete="off"
                            value ={values.email}
                            onChange={handleChange}
                        />
                          <div className="hidden">{errors.email && <p>{errors.email}</p>}</div> 
                    </div>
                    <div className="form-group type-password">
                        <label htmlFor="password">Senha</label>
                        <input 
                            name="password"
                            id="password"
                            type="password" 
                            autoComplete="off"
                            value ={values.password}
                            onChange={handleChange}
                        />
                          <div className="hidden">{errors.password && <p>{errors.password}</p>}</div> 
                    </div>
                    <div className="form-group input-select-container">
                        <label htmlFor="role">Selecione sua função</label>
                        <select className="input-select" name="role" id="role" value={values.role} onChange={handleChange}>
                            <option value=""></option>
                            <option value="atendente">Atendente</option>
                            <option value="cozinheirx">Cozinheiro(a)</option>
                        </select>
                        <div className="hidden">{errors.role && <p>{errors.role}</p>}</div> 
                    </div>
                    <div className="form-group register-btn-container">
                        <button type="submit">
                            Cadastrar
                        </button>
                    </div>        
                </form>
                <p className="already-a-user">Ja tem uma Conta?</p>
                <div className="link-container"><Link className="link" to="/">Faça o login</Link></div>
            </main>
        </div>
    );
}