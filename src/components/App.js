import { Profile } from 'components/Profile/Profile';
import {FriendList} from 'components/FriendList/FriendList';
import {Statistics} from 'components/Statistics/Statistics';
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory';

import profile from '../data/profile.json';
import friends from '../data/friends.json';
import statistics from '../data/statistics.json';
import transaction from '../data/transactions.json';





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
       <Statistics 
       title='Upload stats' stats={statistics}/>
       <TransactionHistory items={transaction}/>
    </div>
    
   
  );
};
