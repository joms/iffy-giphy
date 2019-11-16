import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Fetch from 'jest-fetch-mock';

Enzyme.configure({ adapter: new Adapter() });
global.fetch = Fetch;
