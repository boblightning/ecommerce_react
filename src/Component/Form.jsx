import React from 'react';
import axios from 'axios';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            username: "",
            email: "",
            password: "",
            role: "User",
            dataUser: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axios.get(`http://localhost:2000/dataUser`)
            .then((response) => {
                this.setState({ dataUser: response.data })
            }).catch((err) => {
                console.log(err)
            })
    }

    btDaftar = () => {
        let { username, email, password } = this.state
        axios.post(`http://localhost:2000/dataUser`, {
            username, email, password, role: "User"
        }).then((response) => {
            this.getData()
            this.setState({
                username:"",
                email:"",
                password:"",
                role:"User"
            })
        }).catch((err)=>{
            console.log(err)
        })
    }


    handleInput=(value,propState)=>{
        console.log(value,propState)
        this.setState({[propState]:value})
    }

    render() {
        return (
            <div className="container" style={{ textAlign: 'center', marginTop: "5vh" }}>
                <div>
                    <h1>Pilihan Masuk</h1>
                    <p>Masuk dan selesaikan pesanan dengan data pribadi Anda atau daftar untuk menikmati semua manfaat memiliki akun IKEA</p>
                </div>
                <div>
                    <div className="row g-3" style={{ marginTop: "auto" }}>
                        <div class="col">
                            <h3>Silahkan Masuk ke akun Anda</h3>
                            <p>Silahkan Masuk ke akun Anda untuk menyesuaikan pembayaran data pribadi Anda</p>
                            <p>Email</p>
                            <input type="text" className="form-control" placeholder="Email" aria-label="Email" />
                            <p style={{ marginRight: "auto" }}>Password</p>
                            <input type="text" className="form-control" placeholder="Password" aria-label="Password" />
                            <button type="submit" className="btn btn-primary" style={{ width: "640px", marginTop: "2vh" }}>Masuk</button>
                        </div>
                        <div class="col">
                            <h3>Silahkan buat akun Anda</h3>
                            <p>Silahkan Masuk ke akun Anda untuk menyesuaikan pembayaran data pribadi Anda</p>
                            <p>Username</p>
                            <input type="text" className="form-control" placeholder="username" aria-label="username" onChange={(event) => this.handleInput(event.target.value, "username")} />
                            <p>Email</p>
                            <input type="text" className="form-control" placeholder="email" aria-label="email" onChange={(event) => this.handleInput(event.target.value, "email")}/>
                            <p>Password</p>
                            <input type="text" className="form-control" placeholder="password" aria-label="password" onChange={(event) => this.handleInput(event.target.value, "password")}/>
                            <p>Confirmation Password</p>
                            <input type="text" className="form-control" placeholder="Confirmation Pasword" aria-label="Confirmation Password" />
                            <button type="submit" className="btn btn-primary" style={{ width: "640px", marginTop: "2vh" }} onClick={this.btDaftar}>Daftar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;