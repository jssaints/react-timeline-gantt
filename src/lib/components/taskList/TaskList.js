import React, { Component } from "react";
import Config from "libs/helpers/config/Config";
import ContentEditable from "libs/components/common/ContentEditable";
import { resolveObjectPathData, DataGroupBy } from "../../utils";
import UserAvatar from "react-user-avatar";
export class VerticalLine extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="timeLine-main-data-verticalLine"
        style={{ left: this.props.left }}
      />
    );
  }
}

export class TaskRow extends Component {
  constructor(props) {
    super(props);
  }

  onChange = value => {
    if (this.props.onUpdateTask) {
      this.props.onUpdateTask(this.props.item, { name: value });
    }
  };
  renderAvatar = () => {
    const userAvatarSize = 30;
    if (this.props.groupByID) {
      if (this.props.item[this.props.userImagePath]) {
        return (
          <UserAvatar className="rounded-circle position-relative" size={userAvatarSize} name={this.props.item[this.props.UsernamePath]} src={`/img/rcmedia/${userAvatarSize}x,sc/${this.props.item[this.props.userImagePath]}`} />
        )
      } else if (this.props.item[this.props.userGravatarPath]) {
        return (
          <UserAvatar className="rounded-circle position-relative" size={userAvatarSize} name={this.props.item[this.props.UsernamePath]} src={`//www.gravatar.com/avatar/${this.props.item[this.props.userGravatarPath]}?d=identicon`} />
        )
      } else if (this.props.item[this.props.UsernamePath]) {
        return (
          <UserAvatar className="rounded-circle position-relative" size={userAvatarSize} name={this.props.item[this.props.UsernamePath]} colors={["#f0134d", "#ff6f5e", "#f1f1b0", "#40bfc1", "#5f6caf"]} />
        );
      }
    } else if (this.props.groupByArrayField && this.props.item[this.props.groupByArrayField] && this.props.item[this.props.groupByArrayField].length > 0) {
      let filteredGroupItems = this.props.item[this.props.groupByArrayField].filter((groupItem) => groupItem && groupItem.id !== null && groupItem.id !== undefined);
      if (filteredGroupItems && filteredGroupItems.length <= 2) {
        return (
          filteredGroupItems.map((row) => {
            let userImage = resolveObjectPathData(this.props.userImagePath, row);
            let userGravatar = resolveObjectPathData(this.props.userGravatarPath, row);
            let userName = resolveObjectPathData(this.props.UsernamePath, row);
            if (userImage) {
              return (
                <UserAvatar key={`${this.props.item.id}-${Math.random()}`} className="rounded-circle position-relative" size={userAvatarSize}
                  name={userName} src={`/img/rcmedia/${userAvatarSize}x,sc/${userImage}`} />
              )
            } else if (userGravatar) {
              return (
                <UserAvatar key={`${this.props.item.id}-${Math.random()}`} className="rounded-circle position-relative" size={userAvatarSize} name={userName} src={`//www.gravatar.com/avatar/${userGravatar}?d=identicon`} />
              );
            } else if (userName) {
              return (
                <UserAvatar key={`${this.props.item.id}-${Math.random()}`} className="rounded-circle position-relative" size={userAvatarSize} name={userName} colors={["#f0134d", "#ff6f5e", "#f1f1b0", "#40bfc1", "#5f6caf"]} />
              );
            }
          })
        );
      } else if (filteredGroupItems && filteredGroupItems.length > 0) {
        let userImage = resolveObjectPathData(this.props.userImagePath, filteredGroupItems[0]);
        let userGravatar = resolveObjectPathData(this.props.userGravatarPath, filteredGroupItems[0]);
        let userName = resolveObjectPathData(this.props.UsernamePath, filteredGroupItems[0]);
        if (userImage) {
          return (
            <React.Fragment>
              <UserAvatar key={`${this.props.item.id}-${Math.random()}`} className="rounded-circle position-relative" size={userAvatarSize}
                name={userName} src={`/img/rcmedia/${userAvatarSize}x,sc/${userImage}`} />
              <span className="position-relative d-flex align-items-center justify-content-center align-middle rounded-circle bg-light font-weight-bold" style={{ height: 30, width: 50 }}>({filteredGroupItems.length})</span>
            </React.Fragment>
          )
        } else if (userGravatar) {
          return (
            <React.Fragment>
              <UserAvatar key={`${this.props.item.id}-${Math.random()}`} className="rounded-circle position-relative" size={userAvatarSize}
                name={userName} src={`//www.gravatar.com/avatar/${userGravatar}?d=identicon`} />
              <span className="position-relative d-flex align-items-center justify-content-center align-middle rounded-circle bg-light font-weight-bold" style={{ height: 30, width: 50 }}>({filteredGroupItems.length})</span>
            </React.Fragment>
          );
        } else if (userName) {
          return (
            <React.Fragment>
              <UserAvatar key={`${this.props.item.id}-${Math.random()}`} className="rounded-circle position-relative" size={userAvatarSize} name={userName} colors={["#f0134d", "#ff6f5e", "#f1f1b0", "#40bfc1", "#5f6caf"]} />
              <span className="position-relative d-flex align-items-center justify-content-center align-middle rounded-circle bg-light font-weight-bold" style={{ height: 30, width: 50 }}>({filteredGroupItems.length})</span>
            </React.Fragment>
          );
        }
      }
    }
  }

  render() {
    return (
      <div
        className="timeLine-side-task-row"
        style={{
          ...Config.values.taskList.task.style,
          top: this.props.top,
          height: this.props.itemheight
        }}
        onClick={e => this.props.onClickItem(this.props.item)}
      >
        {this.props.nonEditable ? (
          <div tabIndex={this.props.index} style={{ width: "100%" }} className="text-truncate">
            {this.props.label}
          </div>
        ) : (
            <ContentEditable
              value={this.props.label}
              index={this.props.index}
              onChange={this.onChange}
            />
          )}
        {this.props.userImagePath &&
          this.renderAvatar()
        }
      </div>
    );
  }
}

export default class TaskList extends Component {
  constructor(props) {
    super(props);
  }

  getContainerStyle(rows) {
    let new_height = rows > 0 ? rows * this.props.itemheight : 10;
    return { height: new_height };
  }

  renderTaskRow(data) {
    let result = [];
    for (let i = this.props.startRow; i < this.props.endRow + 1; i++) {

      let item = data[i];
      if (!item) break;
      result.push(
        <TaskRow
          key={i}
          index={i}
          item={item}
          label={(this.props.groupByName) ? item[this.props.groupByName] : item.name}
          top={i * this.props.itemheight}
          itemheight={this.props.itemheight}
          isSelected={this.props.selectedItem == item}
          onUpdateTask={this.props.onUpdateTask}
          onSelectItem={this.props.onSelectItem}
          nonEditable={this.props.nonEditable}
          groupByArrayField={this.props.groupByArrayField}
          groupByID={this.props.groupByID}
          UsernamePath={this.props.UsernamePath}
          userImageSize={this.props.userImageSize}
          userImagePath={this.props.userImagePath}
          userGravatarPath={this.props.userGravatarPath}
          onClickItem={this.props.onClickItem}
        />
      );
    }
    return result;
  }

  doScroll = () => {
    this.props.onScroll(this.refs.taskViewPort.scrollTop);
  };

  componentDidMount() {
    this.refs.taskViewPort.scrollLeft = 0;
  }

  render() {
    if (this.refs.taskViewPort) {
      this.refs.taskViewPort.scrollLeft = this.props.scrollLeft;
      this.refs.taskViewPort.scrollTop = this.props.scrollTop;
    }
    let data = this.props.data ? this.props.data : [];
    // Group By 
    if (this.props.groupByID) {
      let groupedData = DataGroupBy(this.props);
      const newData = []
      const self = this;
      if (Object.keys(groupedData).length > 0) {
        Object.keys(groupedData).map(function (key) {
          let taskLeftSideData = Object.assign({}, groupedData[key][0]);
          if (self.props.groupByType === 'Array') {
            let groupedDataFiltered = groupedData[key][0][self.props.groupByArrayField].filter((filterElement) => filterElement && filterElement[self.props.groupByID] == key);
            if (groupedDataFiltered.length > 0) {
              taskLeftSideData[self.props.groupByName] = resolveObjectPathData(self.props.groupByName, groupedDataFiltered[0]);
              if (self.props.userImagePath) {
                taskLeftSideData[self.props.userImagePath] = resolveObjectPathData(self.props.userImagePath, groupedDataFiltered[0]);
              }
              if (self.props.userGravatarPath) {
                taskLeftSideData[self.props.userGravatarPath] = resolveObjectPathData(self.props.userGravatarPath, groupedDataFiltered[0]);
              }
            }
          }
          newData.push(taskLeftSideData);
        });
      }
      data = newData;
    }
    this.containerStyle = this.getContainerStyle(data.length);
    return (
      <div className="timeLine-side">
        <div
          className="timeLine-side-title"
          style={Config.values.taskList.title.style}
        >
          <div>{Config.values.taskList.title.label}</div>
        </div>
        <div
          ref="taskViewPort"
          className="timeLine-side-task-viewPort"
          onScroll={this.doScroll}
        >
          <div
            className="timeLine-side-task-container"
            style={this.containerStyle}
          >
            {this.renderTaskRow(data)}
          </div>
        </div>
      </div>
    );
  }
}
