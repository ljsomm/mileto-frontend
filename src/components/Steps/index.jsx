import './styles.css';

const Steps = ({ step, quantity }) => {

    return(
      <div className='step-container'>
          <span className='step-index'>Etapa {step}</span>
          <div className='step-background'>
            {
                (()=>{
                    let items = [];
                    for(let i = 0; i < quantity; i++ ){
                        items.push(<div key={i} className={`step${step >= i+1 ? '-selected':''}`}></div>);
                    }
                    return items;
                })()
            }
          </div>
      </div>
    );
}

export default Steps;