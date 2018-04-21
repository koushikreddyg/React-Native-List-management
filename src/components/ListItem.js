import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  NativeModules
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as action from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    const { UIManager } = NativeModules;
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }
  renderDescription() {
    const { library, expanded } = this.props;
    const { id, description } = library;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{this.props.library.description}</Text>
        </CardSection>
      );
    }
  }
  render() {
    //console.log(this.props.library);
    const { title, id } = this.props.library;
    const { titleStyle } = styles;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.selectLibrary(id);
        }}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = {
  titleStyle: {
    paddingLeft: 10,
    fontSize: 20
  }
};
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return {
    expanded
  };
};
export default connect(mapStateToProps, action)(ListItem);
