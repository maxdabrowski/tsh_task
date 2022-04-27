import './LoaderBackground.css';

const LoaderBackground:React.FC  = () => {
  return (
    <div className="loader_background">
       <div className="loader_background__loader">
        <div className="loader_background__lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LoaderBackground;
