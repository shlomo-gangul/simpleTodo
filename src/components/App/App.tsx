import React from 'react';
import { withTranslation, WithTranslation } from '@wix/wix-i18n-config';
import TodoContainer from '../TodoContainer/TodoContainer';
import s from './App.scss';

interface AppProps extends WithTranslation {}

class App extends React.Component<AppProps> {
  render() {
    return (
      <div className={s.App}>
        <h1 className={s.todoContainerTitle}>simple todo list</h1>
        <TodoContainer />
      </div>
    );
  }
}

export default withTranslation()(App);
