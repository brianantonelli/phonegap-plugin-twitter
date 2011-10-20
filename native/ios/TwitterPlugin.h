//
//  TwitterPlugin.h
//  TwitterPlugin
//
//  Created by Antonelli Brian on 10/13/11.
//

#import <UIKit/UIKit.h>
#import <Twitter/Twitter.h>
#import <Foundation/Foundation.h>
#ifdef PHONEGAP_FRAMEWORK
#import <PhoneGap/PGPlugin.h>
#else
#import "PGPlugin.h"
#endif

@interface TwitterPlugin : PGPlugin{
}

- (void) isTwitterAvailable:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;
    
- (void) isTwitterEnabled:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

- (void) sendTweet:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

@end
