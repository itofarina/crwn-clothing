import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const ShopPage = ({ fetchCollectionsStart, match }) => {
    // here useEffect is replacing the componentDidMount behaviour
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart]);
    // as we know that fetchCollectionsStart is not going to change because it comes from the dispatch properties,
    // it has the same behaviour as sending an empty array

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`}
                component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`}
                component={CollectionPageContainer} />
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
    null,
    mapDispatchToProps
)(ShopPage);
