import React, {Component} from 'react';

class HomeComponent extends Component {
    render() {
        return(
            <>
                 <div>
                    <img src="/flower.jpg" 
                    className="img-fluid" 
                    alt="Responsive" />
                    <div className='left-center'>천지인에 오신것을 환영합니다.</div>
                 </div> 
            </>
        )
    }
}

export default HomeComponent;