import "./LoadingPage.css";

const LoadingPage = () => {
	return (
		<div className="loading-container">
			<div className="loading-spinner" role="status">
				<div className="spinner-circle"></div>
				<div className="spinner-circle"></div>
				<div className="spinner-circle"></div>
			</div>
			<p className="loading-text">Loading...</p>
		</div>
	);
};

export default LoadingPage;
