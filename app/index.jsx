// You can also include here commons if you want with import 'react-toolbox/lib/commons';
import React from 'react';
import ReactDOM from 'react-dom';


import TitleBar from './components/TitleBar/titlebar';
import TorrentList from './components/TorrentList/torrentlist';
import TorrentActionBar from './components/TorrentActionBar';
import TorrentBackground from './components/TorrentBackground';
import StatusWidget from './components/StatusWidget';

import FontIcon from 'material-ui/lib/font-icon';
import {TextField, Card, CardText, Paper} from 'material-ui/lib';

import Colors from 'material-ui/lib/styles/colors';
import style from './style';


ReactDOM.render((
	<div>
 	 	<TitleBar />
		<TorrentBackground />
		<Paper zDepth={2} className={style.middleContainer}></Paper>

 	 	<section className={style.content}>
 	 		
 	 		<div className={style.torrents}>
 	 			<StatusWidget />
 	 			<TorrentActionBar />
 	 			<Card >
      				<TorrentList />
  				</Card>
  			</div>
    	</section>

    </div>
), document.getElementById('app'));
