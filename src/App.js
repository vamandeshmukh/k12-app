import './App.css';
import Header from './Header';
import Footer from './Footer';
import GetData from './GetData';
function App() {
  return (
    <div className="App">
      <link rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
      <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
      <Header />
      <Footer />
    </div>
  );
}
export default App;
