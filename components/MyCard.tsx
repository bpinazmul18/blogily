import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { MyCardProps } from '../models/MyCard';
import Link from 'next/link';

const { Meta } = Card;

const MyCard = ( { id, title, description}: MyCardProps) => {
    return (
        <Card>
            <Link href={`/posts/${id}`}>{title}</Link>
            <p>{description}</p>

            <div className="author" style={{ display: 'flex', alignItems: 'center'}}>
                <Avatar icon={<UserOutlined />} />
                <h4 style={{ marginBottom: '0', marginLeft: '10px'}}>Nazmul Haque</h4>
            </div>

        </Card>
    )
}

export default MyCard;