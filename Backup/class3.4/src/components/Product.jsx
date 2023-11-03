import React from 'react'
class Product extends React.Component{
    product={
        pid:'P101',
        pname:'Iphone 12s',
        price:25000,
        color:['red','blue','yellow'],
        image:'data:image/webp;base64,UklGRpwDAABXRUJQVlA4IJADAAAQFQCdASp+AH4APj0ai0SiIYiFAqIQAeJaQDXBYK93gRbea7VXtUn17sC7b67XGr/pvTfzvfln+U/5PuE/yr+zf8nr9ehv+l4+/IkfGmI2sVj5Se2rCd4uCzPUD/d1x25WjTIastMOXpAqQVjruLq1816XIxa8eSiT2enBb8MxJ8qzoIrSg9K/XIPkuneAMv5+7dogEkKg+PTZwieYcKWIfISFwTDY4PvTvbCVmPs2zAAA/v6JIv3uFkHs1O9vabIZFjfP75LF95xTLoTfJg8XeyO/GTyRROtHaMjbHuzIEu/6YpPEg+ofLOKlUouj21/3XMwNzFxW8olejlaSitb1SNb6X1Big4mDAz79GRzjeXE1Upz490VBBaeO5ASduRqeL+cPwLMG/ieGHN7btDPP489cdT33npDS/MOEltsDG+0narZYAqGi1/ZKqA9lDJatD5HSUotsGgil3wuhOT9ikFVneWMrMuaa4Yi/DobGnSAeXmpgstOdBuT8U6x8S210Gf/g4aGd1rWkygLICXSlW6r2pYPGcGldEAj9uZa3S63CwFCqjo4r+voXOD7QPa4E0tN/qinE7n3tPmucDxkiOtOKZ6bk5kNwg1N+Rrk50DQp0f681JNh3/igCTh93smzTwSSshN025Y0iw7MFYqt2lGI9yhlv6+agqTGNum32SPw3Irxhfq8UmskP4J3+6pgBcvwauMjGxb8U9L5CmOQWfcGU6eP6aR0Tf9vIHQYdfzdI4si2z6wImb4KQEZzrjAjDVcb2sU1AvtqkI81xtaQ2+VPdwhAnBDJt8zpQZ296BxiAT/v1ZgWXGNtZFC1XSakD8LzwgmrkclGUMd6bGvuHyURh1RzTz0a+skegfDWK/a16LfM3EjQGNLe2OGcVgZIeI4kr989/bHU7HX0uwj9Wao2F6iT0SJPtwLZeI2Pw5lB29FAAqzAIeKX7iiLfAHMXOz6PWeUhKebLI/7uHGe4B2u8JY4VjDTJ12UrwwcKuD1DCcJ8wEBD4YsjKUdJqmZviKw4CoXBUA23GQ7eT0GMSUI4YgGZbGoHXzP4ISPBtgHvHMr8LTXN/vBWPlq7i21zBlDjQBUjQCF9cosbeK3X0N3rdKsY8c4WZpO1ZT6zydC/7tHwbXXS6+X7Tc6h2ePjfYQdE8RXHEAEJRqz8y9O2UlfrSP389j3ALlDatxvgvQ2BTXLmPqWUCWZsAAAA='
    }
    render(){

        return   <div className="container mt-5">
      <pre>{JSON.stringify(this.product)}</pre> 
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">
                        <img src={this.product.image} alt="" />
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">{this.product.pid}</li>
                            <li className="list-group-item">{this.product.pname}</li>
                            <li className="list-group-item">{this.product.price}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    }
}
export default Product