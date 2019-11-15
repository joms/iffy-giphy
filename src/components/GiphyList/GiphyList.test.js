import React from 'react';
import { shallow } from 'enzyme';
import GiphyList from '.';
import { GiphyCard } from '../GiphyListItem';

export const giphyListMock = [
    {
        type: 'gif',
        id: 'a93jwI0wkWTQs',
        url: 'https://giphy.com/gifs/dl-a93jwI0wkWTQs',
        slug: 'dl-a93jwI0wkWTQs',
        bitly_gif_url: 'https://gph.is/2cq6Bi4',
        bitly_url: 'https://gph.is/2cq6Bi4',
        embed_url: 'https://giphy.com/embed/a93jwI0wkWTQs',
        username: '',
        source: 'https://popkey.co/m/1Z4dL-homer-back+away',
        title: 'backing up homer simpson GIF',
        rating: 'g',
        content_url: '',
        source_tld: 'popkey.co',
        source_post_url: 'https://popkey.co/m/1Z4dL-homer-back+away',
        is_sticker: 0,
        import_datetime: '2016-09-15 16:13:40',
        trending_datetime: '1970-01-01 00:00:00',
        images: {
            original: {
                frames: '13',
                hash: '0e16308f84a3404fb5b19ba99735ddc4',
                height: '327',
                mp4:
                    'https://media0.giphy.com/media/Zk9mW5OmXTz9e/giphy.mp4?cid=bf19f9f15599a35642e44dff8fea75a22569381a0f67085e&rid=giphy.mp4',
                mp4_size: '359136',
                size: '506259',
                url:
                    'https://media0.giphy.com/media/Zk9mW5OmXTz9e/giphy.gif?cid=bf19f9f15599a35642e44dff8fea75a22569381a0f67085e&rid=giphy.gif',
                webp:
                    'https://media0.giphy.com/media/Zk9mW5OmXTz9e/giphy.webp?cid=bf19f9f15599a35642e44dff8fea75a22569381a0f67085e&rid=giphy.webp',
                webp_size: '441152',
                width: '500',
            },
            preview_webp: {
                height: '92',
                size: '33274',
                url:
                    'https://media0.giphy.com/media/Zk9mW5OmXTz9e/giphy-preview.webp?cid=bf19f9f15599a35642e44dff8fea75a22569381a0f67085e&rid=giphy-preview.webp',
                width: '140',
            },
        },
    },
];

describe('<GiphyList>', () => {
    it('matches snapshot', () => {
        const wrapper = shallow(<GiphyList giphs={giphyListMock} as={GiphyCard} />);
        expect(wrapper).toMatchSnapshot();
    });
});
