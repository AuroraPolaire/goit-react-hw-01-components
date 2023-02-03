import { ProfileCard } from 'components/Profile/ProfileCard';
import user from 'components/Profile/user.json';

import data from 'components/Statistics/data.json';
import { StatsCard } from 'components/Statistics/StatsCard';

import friends from 'components/FriendList/friends.json';
import { FriendList } from './FriendList/FriendList';

import transactions from 'components/TransactionHistory/transactions.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import { GlobalStyle } from './App.styled';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ProfileCard user={user} />
      <StatsCard stats={data} title={'upload stats'} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
