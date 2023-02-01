import { ProfileCard } from 'components/profile/ProfileCard';
import user from 'components/profile/user.json';

import data from 'components/statistics/data.json';
import { StatsCard } from 'components/statistics/StatsCard';

import friends from 'components/friendList/friends.json';
import { FriendList } from './friendList/FriendList';

import transactions from 'components/transactionHistory/transactions.json';
import { TransactionHistory } from 'components/transactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <ProfileCard user={user} />
      <StatsCard stats={data} title={'upload stats'} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
