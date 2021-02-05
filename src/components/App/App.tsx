import React from 'react';
import './styles.css';
import 'antd/dist/antd.css';
import { BackTop } from 'antd';
import Header from '../Header/header';
import AuthorizationModal from '../AuthorizationModal/AuthorizationModal';
import EditUserModal from '../EditUserModal/EditUserModal';
import CurrenciesPage from '../CurrenciesPage/CurrenciesPage';
import RssNewsPage from '../RssPage/RssNewsContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsPage from '../Posts/PostsPage';
import AdministratorPage from '../AdministratorPage/AdministratorPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' component={PostsPage} exact={true}/>
          <Route path='/currencies' component={CurrenciesPage}/>
          <Route path='/rss' component={RssNewsPage} />
          <Route path='/admin_room' component={AdministratorPage} />
        </Switch>
        <AuthorizationModal />
        <EditUserModal />
        <BackTop />
      </div>
    </BrowserRouter>
  );
}
