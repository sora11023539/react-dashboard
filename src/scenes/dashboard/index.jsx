import { Box } from '@mui/system';
import { Header } from '../../components/Header';

export const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subTitle="Welcome to the dashboard" />
      </Box>
    </Box>
  );
};
