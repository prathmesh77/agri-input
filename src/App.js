import './App.css';
import { Route, Switch } from 'react-router-dom';

import Sidebar from "./pages/sidebar/sidebar.component";
import PurchaseRequest from './components/purchase-request/purchase-request.component';
import InputMaster from './components/input-master/input-master.component';
import SupplierMaster from './components/supplier-master/supplier-master.component';

function App() {
  return (
    <div>
      <Sidebar/>
      <Switch>

        <Route exact path="/" component={PurchaseRequest} />
        <Route exact path="/purchase-request" component={PurchaseRequest} />
        <Route exact path="/input-master" component={InputMaster} />
        <Route exact path="/supplier-master" component={SupplierMaster }/>
     </Switch>
    </div>
  );
}

export default App;
