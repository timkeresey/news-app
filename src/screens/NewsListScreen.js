import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Card from '../components/Card';
import * newsAction from '../reduc/actions/newsAction';


const NewsListScreen = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(newsAction.fetchArticles())
    }, [dispatch]);

    const articles = useSelector(state => state.news.articles);

    return (
        <Card navigation={props.navigation} />
    );     
}

const styles = StyleSheet.create({
    
})

export default NewsListScreen;