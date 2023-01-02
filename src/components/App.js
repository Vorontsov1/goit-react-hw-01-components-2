import { Profile } from 'components/Profile/Profile';
import {FriendList} from 'components/FriendList/FriendList';
// import {Statistics} from 'components/Statistics/Statistics';
// import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory';

import profile from '../components/Data/profile.json';
import friends from '../components/Data/friends.json';
// import statistics from '../components/Data/statistics.json';
// import transaction from '../components/Data/transactions.json';





export const App = () => {
  return (
    <div>
      <Profile 
      username={profile.username}
      tag={profile.tag}
      location={profile.location}
      avatar={profile.avatar}
      stats={profile.stats} />

       <FriendList friends={friends}/>
      {/* <Statistics />
      <TransactionHistory />   */}
    </div>
    
   
  );
};
