import React from 'react';
import {Avatar,Button,Input,Col,Row} from 'antd';

class CartItem extends React.Component{
    render(){
        const goodsObj=this.props.goodsObj;
        return (
            <div style={{paddingBottom:'20px',borderBottom:'solid #eee 1px'}}>
                <div>{goodsObj.goodsName}</div>
                <Row type={'flex'} justify={'space-between'} align={'middle'}>
                    <Col span={5}>
                        <Avatar shape={'square'}  icon={'user'} src={goodsObj.imageUrl}/>
                    </Col>
                    <Col span={5}>
                        ×{this.props.count}
                    </Col>
                    <Col span={14}>
                        <Row type={'flex'} align={'middle'} justify={'space-between'}>
                            <Col span={3} >
                                <Button
                                    size={"small"}
                                    shape={"circle"}
                                    icon={"minus"}
                                    type={"danger"}
                                    onClick={this.props.clickDrop}
                                />
                            </Col>
                            <Col span={13} offset={4}>
                                <Input
                                    size={"small"}
                                    defaultValue={this.props.count}
                                    onChange={e=>this.props.changeAmount(e.target.value)}
                                />
                            </Col>
                            <Col span={3}>
                                <Button
                                    size={"small"}
                                    shape={"circle"}
                                    type={"danger"}
                                    icon={"plus"}
                                    onClick={this.props.clickAdd}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div>{`${goodsObj.price}×${this.props.count}=${goodsObj.price*this.props.count}`}</div>
            </div>
        )
    }
}

export default CartItem;