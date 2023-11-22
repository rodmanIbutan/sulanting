import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Index from '@/pages/Index'
import Season from '@/pages/Season'
import Diary from '@/pages/Diary'
import Book from '@/pages/Book'
import New from '@/pages/Diary/New'
import Article from '@/pages/Diary/Article'
import VideoDetails from '@/pages/VideoDetails'
import Details from '@/pages/Details'
import Message from '@/pages/Message'
import Reply from '@/pages/Message/Reply'
import MyMessage from '@/pages/Message/MyMessage'
import Like from '@/pages/Message/Like'
import UserMessage from '@/pages/Message/MyMessage/UserMessage'
import CreativeCenter from '@/pages/CreativeCenter'
import Release from '@/pages/CreativeCenter/Release'
import VideoR from '@/pages/CreativeCenter/Release/VideoR'
import ArticleR from '@/pages/CreativeCenter/Release/ArticleR'
import Blank from '@/pages/Blank'
import Concern from '@/pages/Concern'
import Person from '@/pages/Person'
import Home from '@/pages/Person/Home'
import Dynamic from "@/pages/Person/Dynamic"

export default new VueRouter({
	routes:[
		{
			path:"/index",
			name:'index',
			component:Index
		},
		{
			path:"/season",
			component:Season
		},
		{
			path:"/diary",
			component:Diary,
			children:[
				{
					path:'',
					component:New,
				},
				{
					path:'article',
					component:Article,
				}
			]
		},
		{
			path:"/book",
			component:Book	
		},
		{
			path:"/videoDetails/:id",
			component:VideoDetails,
		},
		{
			path:"/detail/:id",
			component:Details,
		},
		{
			path:"/message",
			component:Message,
			children:[
				{
					path:'',
					component:Reply,
				},
				{
					path:'myMessage',
					component:MyMessage,
					children:[
						{
							path:':id',
							component:UserMessage
						}
					]
				},
				{
					path:'like',
					component:Like
				}
			]
		},
		{
			path:"/creativecenter:id",
			name:'creativecenter',
			component:CreativeCenter,
			children:[
				{
					path:'release',
					component:Release,
					children:[
						{
							path:'',
							name:'video',
							component:VideoR
						},
						{
							path:'article',
							name:'article',
							component:ArticleR
						}
					]
				}
			]
		},
		{
			path:'/blank',
			component:Blank
		},
		{
			path:'/concern',
			component:Concern
		},
		
		{
			path:'/person:id',
			component:Person,
			children:[
				{
					path:'',
					component:Home
				},
				{
					path:'dynamic',
					component:Dynamic
				}
			]
		}
		,{
			path:'*',
			redirect:"/index"
		}
	]
})