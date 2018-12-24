import React, { Component } from 'react';
import TagTree from '../components/TagsTaxonomy/TagsTree'

class TagsTaxonomyContainer extends Component {
  render() {
    return (
      <div style={{padding:'10px'}}>
        <h1>标签分类</h1>
        <p>之前项目中有个功能是给每个文章打一些标签用于分类，是用Backbone做的。这个功能业务逻辑非常多，交互很复杂，
          虽然最终功能做出来了，但是可维护性太差，自己写完都头大。这里想用Redux来重构一下，觉得这个场景应该很合适用Redux来做。</p>
        <hr />
        <TagTree />
      </div>
    );
  }
}

export default TagsTaxonomyContainer;