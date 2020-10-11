const startOfYesterday = require('date-fns/startOfYesterday');
const format = require('date-fns/format');
const startOfToday = require('date-fns/startOfToday')
const lastDayOfWeek = require('date-fns/lastDayOfWeek');
module.exports=class Menu
{
    /**
     * The NCCO Stack
     * @var array
     */
    ncco = [];

    /**
     * App Config
     * @var array
     */
    config;

    constructor(config)
    {
        this.config = config;
    }

    /**
     * When the call is answered, say hello.
     */
    answerAction()
    {
        this.append({
            'action' : 'talk',
            'text':'Thanks for calling our order status hotline.'
        });

        this.promptSearch();
    }

    searchAction(request)
    {
        if(request.dtmf) {
            const dates = [startOfYesterday(), startOfToday(), lastDayOfWeek(startOfToday())];
            const status = ['shipped', 'backordered', 'pending'];
            const randStatus=Math.floor(Math.random() * status.length);
            const randDates=Math.floor(Math.random() * dates.length);
            this.append({
                'action' : 'talk',
                'text' : `Your order ${this.talkCharacters(request.dtmf)}
                          ${this.talkStatus(status[randStatus])}
                        as  of  ${this.talkDate(dates[randDates])}`
            });
        }

        this.append({
            'action' : 'talk',
            'text' : 'If you are done, hangup at any time. If you would like to search again'
        });

        this.promptSearch();
    }

    promptSearch()
    {
        this.append({
            'action' : 'talk',
            'text' : 'Using the numbers on your phone, enter your order number followed by the pound sign'
        });

        this.append({
            'action' : 'input',
            'eventUrl' : [this.config +'/search'],
            'timeOut' : '10',
            'submitOnHash' : true
        });
    }

    talkStatus(status)
    {
        switch(status){
            case 'shipped':
                return 'has been shipped';
            case 'pending':
                return 'is still pending';
            case 'backordered':
                return 'is backordered';
            default:
                return 'can not be located at this time';
        }
    }

    talkDate(date)
    {
        return format(date,"iiii MMMM do");
    }

    talkCharacters(string)
    {
        return string.split().join(" ");
    }

    getStack()
    {
        return this.ncco;
    }

    append(ncco)
    {
        this.ncco.push(ncco);
    }

    prepend(ncco)
    {
        this.ncco.unshift(ncco);
    }
}