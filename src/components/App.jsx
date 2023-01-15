import Profile from "./profile/Profile";
import user from './profile/user.json';
import Statistics from "./statistic/Statistics";
import data from './statistic/data.json';
import FriendsList from './friend-list/FriendsList';
import friends from './friend-list/friends.json';
import TransactionHistory from './transaction/TransactionHistory';
import transactions from './transaction/transactions.json';

export const App = () => {
  return (
    <div
      
    >
     
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        
        
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
      
    </div>
  );
};
