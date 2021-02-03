import React, { Component } from 'react'
import moment from 'moment'
import { BUFFER_DAYS, DATA_CONTAINER_WIDTH, VIEW_MODE_DAY, VIEW_MODE_WEEK, VIEW_MODE_YEAR } from 'libs/Const'
import DataTask from 'libs/components/viewport/DataTask'
import DateHelper from 'libs/helpers/DateHelper'
import sizeMe from 'react-sizeme'
import Config from 'libs/helpers/config/Config'
import { DataGroupBy } from "../../utils"

export class DataRow extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="timeLine-main-data-row"
                style={{ ...Config.values.dataViewPort.rows.style, top: this.props.top, height: this.props.itemheight }}>
                {this.props.children}
            </div>)
    }
}

export class DataViewPort extends Component {
    constructor(props) {
        super(props)
        this.childDragging = false
    }
    getContainerHeight(rows) {
        let new_height = rows > 0 ? rows * this.props.itemheight : 10;
        return new_height
    }
    onChildDrag = (dragging) => {
        this.childDragging = dragging;
    }

    // calculatePosition=(item)=>{
    //     let new_position=DateHelper.dateToPixel(item.start,this.props.nowposition,this.props.dayWidth);
    //     let new_width=DateHelper.dateToPixel(item.end,this.props.nowposition,this.props.dayWidth)-new_position;
    //     //Checking start
    //     if (new_position<this.props.boundaries.lower){
    //         if (new_position+new_width<this.props.boundaries.lower){
    //             //no in visible space
    //             return({left:0,width:0})
    //         }
    //         else{
    //             new_position=this.props.boundaries.lower-12;
    //         }
    //     }
    //     if (new_position>this.props.boundaries.upper){
    //             return({left:0,width:0})
    //     }
    //     if (new_position>this.props.boundaries.upper){
    //         return({left:0,width:0})
    //     }else{
    //     }
    // }
    renderGroupRows = () => {
        let groupedData = DataGroupBy(this.props)
        const newData = []
        if (Object.keys(groupedData).length > 0) {
            Object.keys(groupedData).map(function (key, index) {
                newData[index] = groupedData[key];
            });
        }
        return newData;
    }

    renderRows = () => {
        let result = [];
        let data = this.props.data;
        if (this.props.groupByID) {
            data = this.renderGroupRows();
        }
        for (let i = this.props.startRow; i < this.props.endRow + 1; i++) {
            let item = data[i];
            if (!item) break
            //FIXME PAINT IN BOUNDARIES
            if (!this.props.groupByID) {
                let new_position = DateHelper.dateToPixel(item.start, this.props.nowposition, this.props.dayWidth);
                let new_width = DateHelper.dateToPixel(item.end, this.props.nowposition, this.props.dayWidth) - new_position;
                result.push(<DataRow key={i} label={item.name} top={i * this.props.itemheight} left={20} itemheight={this.props.itemheight} >
                    <DataTask item={item} label={item.name}
                        nowposition={this.props.nowposition}
                        dayWidth={this.props.dayWidth}
                        color={item.color}
                        left={new_position}
                        width={new_width}
                        height={this.props.itemheight}
                        onChildDrag={this.onChildDrag}
                        isSelected={this.props.selectedItem == item}
                        onSelectItem={this.props.onSelectItem}
                        enableLinker={true}
                        onClickItem={this.props.onClickItem}
                        onStartCreateLink={this.props.onStartCreateLink}
                        onFinishCreateLink={this.props.onFinishCreateLink}
                        onTaskChanging={this.props.onTaskChanging}
                        onUpdateTask={this.props.onUpdateTask}
                        borderLeft={this.borderLeft}
                        itemNumber={i}> </DataTask>
                </DataRow>);
            } else {
                result.push(<DataRow key={i} top={i * this.props.itemheight} left={20} itemheight={this.props.itemheight} >
                    {this.renderTask(item)}
                    {this.borderLeft && this.borderLeft.map((borderLeft, index) => (
                        <React.Fragment key={`borderLeft-${index}`}>
                            {borderLeft}
                        </React.Fragment>
                    ))}
                </DataRow>);
            }

        }
        return result;
    }

    renderTask = (items) => {
        let resultTask = [];
        for (let j = 0; j < items.length + 1; j++) {
            let key = 'key' + j;
            let card = items[j];

            if (!card) break
            let new_position = DateHelper.dateToPixel(card.start, this.props.nowposition, this.props.dayWidth);
            let new_width = DateHelper.dateToPixel(card.end, this.props.nowposition, this.props.dayWidth) - new_position;
            resultTask.push(<DataTask key={key} item={card} label={card.name}
                nowposition={this.props.nowposition}
                dayWidth={this.props.dayWidth}
                color={card.color}
                left={new_position}
                width={new_width}
                height={this.props.itemheight}
                enableLinker={false}
                onChildDrag={this.onChildDrag}
                onClickItem={this.props.onClickItem}
                isSelected={this.props.selectedItem == card}
                onSelectItem={this.props.onSelectItem}
                onStartCreateLink={this.props.onStartCreateLink}
                onFinishCreateLink={this.props.onFinishCreateLink}
                onTaskChanging={this.props.onTaskChanging}
                onUpdateTask={this.props.onUpdateTask}> </DataTask>
            );
        }
        return resultTask;
    }
    doMouseDown = (e) => {
        if ((e.button === 0) && (!this.childDragging)) {
            this.props.onMouseDown(e)
        }
    }
    doMouseMove = (e) => {
        this.props.onMouseMove(e, this.refs.dataViewPort)
    }

    doTouchStart = (e) => {
        if (!this.childDragging) {
            this.props.onTouchStart(e)
        }
    }
    doTouchMove = (e) => {
        this.props.onTouchMove(e, this.refs.dataViewPort)
    }

    doScroll = () => {
        this.props.onScroll(this.refs.dataViewPort.scrollTop);
    };

    componentDidMount() {
        this.refs.dataViewPort.scrollLeft = 0;
    }

    getModeIncrement(date, mode) {
        switch (mode) {
            case 'year':
                return DateHelper.daysInYear(date.year())
            case 'month':
                return date.daysInMonth()
            case 'week':
                return 7;
            default:
                return 1;
        }
    }


    getStartDate = (date, mode) => {
        let year = null;
        switch (mode) {
            case 'year':
                year = date.year();
                return moment([year, 0, 1]);
            case 'month':
                year = date.year();
                let month = date.month();
                return moment([year, month, 1]);
            case 'week':
                return date
            default:
                return date

        }
    }

    getFormat(mode, position) {

        switch (mode) {
            case 'year':
                return 'YYYY'
            case 'month':
                if (position == 'top')
                    return 'MMMM YYYY'
                else
                    return 'MMMM'
            case 'week':
                if (position == 'top')
                    return 'ww MMMM YYYY'
                else
                    return 'ww'
            case 'dayweek':
                if (position == 'top')
                    return 'D MMMM YYYY'
                else
                    return 'dd'
            case 'daymonth':
                return 'D'

        }
    }

    getBox(date, mode, lastLeft) {
        let increment = this.getModeIncrement(date, mode) * this.props.dayWidth
        if (!lastLeft) {
            let starDate = this.getStartDate(date, mode)
            starDate = starDate.startOf('day')
            let now = moment().startOf('day')
            let daysInBetween = starDate.diff(now, 'days');
            lastLeft = DateHelper.dayToPosition(daysInBetween, this.props.nowposition, this.props.dayWidth);
        }

        return { left: lastLeft, width: increment }
    }

    render() {
        if (this.refs.dataViewPort) {
            this.refs.dataViewPort.scrollLeft = this.props.scrollLeft;
            this.refs.dataViewPort.scrollTop = this.props.scrollTop;
        }
        let height;
        if (this.props.groupByID) {
            let groupData = this.renderGroupRows();
            height = this.getContainerHeight(groupData.length)
        } else {
            height = this.getContainerHeight(this.props.data.length)
        }
        this.borderLeft = [];
        let mode = 'month';
        let position = 'top';
        switch (this.props.mode) {
            case VIEW_MODE_DAY:
            case VIEW_MODE_WEEK:
                mode = 'dayweek';
                position = 'middle';
                break;
            case VIEW_MODE_YEAR:
                mode = 'year';
                position = 'middle';
                break;
        }
        let lastLeft = {}
        let lastLeft1 = {}
        let lastLeft2 = {}
        let lastLeft3 = {}
        let currentTop = ""
        let currentDate = null;
        let box = null
        let box1 = null
        let box2 = null
        let box3 = null
        let start = this.props.currentday;
        let end = this.props.currentday + this.props.numVisibleDays;
        for (let i = start - BUFFER_DAYS; i < end + BUFFER_DAYS; i++) {
            //The unit of iteration is day 
            currentDate = moment().add(i, 'days');
            /* Month left line code starts */
            if (position === 'top') {
                const tmpCurrentTop = currentDate.format(this.getFormat(mode, position));
                if (currentTop != tmpCurrentTop) {
                    currentTop = tmpCurrentTop;
                    box = this.getBox(currentDate, mode, lastLeft.top)
                    lastLeft.top = box.left + box.width;
                    this.borderLeft.push(<div className="timeline-header-item" style={{ borderLeft: 'solid 1px #00000020', position: 'absolute', height: this.props.itemheight, left: box.left }}></div>)
                }
            }
            /* Month left line code ends */
            /* Week end left line code starts */
            const tmpCurrentTop = currentDate.format(this.getFormat("dayweek"));
            if (tmpCurrentTop === "Sa") {
                box1 = this.getBox(currentDate, "week", lastLeft1.top)
                lastLeft1.top = box1.left + box1.width;
                this.borderLeft.push(<div className="timeline-weekend-item" style={{ backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)', backgroundSize: '1rem 1rem', backgroundColor: '#f5f5f5', width: this.props.dayWidth, position: 'absolute', height: this.props.itemheight, left: box1.left }}></div>)
            }
            if (tmpCurrentTop === "Su") {
                box2 = this.getBox(currentDate, "week", lastLeft2.top)
                lastLeft2.top = box2.left + box2.width;
                this.borderLeft.push(<div className="timeline-weekend-item" style={{ backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)', backgroundSize: '1rem 1rem', backgroundColor: '#f5f5f5', width: this.props.dayWidth, position: 'absolute', height: this.props.itemheight, left: box2.left }}></div>)
            }
            const tmpCurrentTop1 = currentDate.format(this.getFormat("dayweek", "top"));
            const tmpCurrentTop2 = moment().format(this.getFormat("dayweek", "top"));
            if (tmpCurrentTop1 === tmpCurrentTop2) {
                box3 = this.getBox(moment(), "week", lastLeft3.top)
                lastLeft3.top = box3.left + box3.width;
                this.borderLeft.push(<div id="timelineToday" style={{ borderLeft: '2px solid red', borderColor: '#f14b34', position: 'absolute', height: this.props.itemheight, left: box3.left }}></div>)
            }
            /* Week end left line code starts */
        }

        return (
            <div ref="dataViewPort" id="timeLinedataViewPort" className="timeLine-main-data-viewPort"
                onMouseDown={this.doMouseDown}
                onMouseMove={this.doMouseMove}
                onMouseUp={this.props.onMouseUp}
                onMouseLeave={this.props.onMouseLeave}
                onTouchStart={this.doTouchStart}
                onTouchMove={this.doTouchMove}
                onTouchEnd={this.props.onTouchEnd}
                onTouchCancel={this.props.onTouchCancel}
                onScroll={this.doScroll}
            >

                <div className="timeLine-main-data-container" style={{ height: height, width: DATA_CONTAINER_WIDTH, maxWidth: DATA_CONTAINER_WIDTH }}>
                    {
                        this.renderRows().map((row) => { row })
                    }
                    {this.renderRows()}
                </div>
            </div>)
    }
}

export default sizeMe({ monitorWidth: true, monitorHeight: true })(DataViewPort)
