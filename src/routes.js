import React from 'react';
import { Route, Switch } from 'react-router';
import { useLocation } from 'react-router-dom'

// Pages
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import Terms from './pages/Static/terms';
import Privacy from './pages/Static/privacy';
import FAQ from './pages/FAQ';
import PersonalListing from './pages/Personal/listing';
import PersonalKontak from './pages/Personal/kontak';
import PersonalFinancing from './pages/Personal/financing';
import PersonalDeals from './pages/Personal/deals';
import Business from './pages/Business';
import Article from './pages/Article';
import ArticlePost from './pages/Article/article-post';
import Confirmation from './pages/Confirmation';
import Approve from './pages/Confirmation/approve';
import Reject from './pages/Confirmation/reject';
import Uikit from './pages/Uikit';

// Layouts
import MainLayout from './components/Layout/MainLayout';

export default (
  <Switch>
    <Route>
      <MainLayout>    
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hubungi-kami" component={ContactUs} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/syarat-dan-ketentuan" component={Terms} />
          <Route exact path="/kebijakan-privasi" component={Privacy} />
          <Route exact path="/personal/listing" component={PersonalListing} />
          <Route exact path="/personal/kontak" component={PersonalKontak} />
          <Route exact path="/personal/financing" component={PersonalFinancing} />
          <Route exact path="/personal/deals" component={PersonalDeals} />
          <Route exact path="/bisnis" component={Business} />
          <Route exact path="/artikel" component={Article} />
          <Route exact path="/artikel/:id" component={ArticlePost} />
          <Route exact path="/confirmation" component={Confirmation} />
          <Route exact path="/confirmation/approve" component={Approve} />
          <Route exact path="/confirmation/reject" component={Reject} />
          <Route exact path="/uikit" component={Uikit} />
        </Switch>
      </MainLayout>
    </Route>
  </Switch>
);